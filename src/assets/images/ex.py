import os
import json
import pandas as pd
import requests

# Load the Excel file
file_path = 'Leelavati_data.xlsx'
df = pd.read_excel(file_path)

# Convert all data in the DataFrame to uppercase, except for 'Images' and 'PDF' columns
columns_to_uppercase = df.columns.difference(['Images', 'PDF'])
df[columns_to_uppercase] = df[columns_to_uppercase].applymap(lambda x: str(x).upper() if pd.notna(x) else x)

# Check if 'Stock' and 'Price' columns exist, and set to 0 only if they are empty or non-numeric
if 'Stock' in df.columns:
    df['Stock'] = pd.to_numeric(df['Stock'], errors='coerce').fillna(0).astype(int)
else:
    df['Stock'] = 0

if 'Price' in df.columns:
    df['Price'] = pd.to_numeric(df['Price'], errors='coerce').fillna(0.0)
else:
    df['Price'] = 0.0

# Add an "Images" column if it doesn't exist
if 'Images' not in df.columns:
    df['Images'] = ''

# Function to generate the code
def generate_code(row):
    parts = []
    
    # Get the first two letters of MAIN CATEGORY
    if pd.notna(row['MAIN CATEGORY']):
        parts.append(row['MAIN CATEGORY'][:2])
    
    # Get the first two letters of SUB CATEGORY
    if pd.notna(row['SUB CATEGORY']):
        parts.append(row['SUB CATEGORY'][:2])
    
    # Get the first two letters of BRAND
    if pd.notna(row['BRAND']):
        parts.append(row['BRAND'][:2])
    
    # Get the Model number without special characters
    if pd.notna(row['Model number']):
        model_number = ''.join(e for e in row['Model number'] if e.isalnum())
        parts.append(model_number)
    
    # Join parts with hyphens
    return '-'.join(parts)

# Apply the function to generate the Code column
df['Code'] = df.apply(generate_code, axis=1)

# Replace NaN values with empty strings
df = df.fillna('')

# Function to convert Google Drive links to direct download links
def convert_drive_link(link):
    if isinstance(link, str) and 'drive.google.com/file/d/' in link:
        file_id = link.split('/d/')[1].split('/')[0]
        # Change export=view to export=download for direct download link
        return f'https://drive.google.com/uc?export=download&id={file_id}'
    return link

# Apply the function only if necessary
df['Images'] = df['Images'].apply(convert_drive_link)

# Select the specified columns for JSON output along with all other data
specified_columns = ['MAIN CATEGORY', 'SUB CATEGORY', 'Code', 'Model number', 'BRAND', 
                     'Housing Size (mm)/Material', 'Range', 'Output Function', 
                     'Supply Voltage', 'Connection', 'Specific', 'Images', 'PDF']

# Create a DataFrame that includes all columns plus the specified columns
df_all_with_specified = df.copy()
for col in specified_columns:
    if col not in df_all_with_specified.columns:
        df_all_with_specified[col] = ''  # Add any missing columns with empty values

# Convert each row of the DataFrame with specified columns into a dictionary and store it in a list
list_of_dicts = df_all_with_specified.to_dict(orient='records')

# Save the list of dictionaries to a JSON file
json_output_path = 'Leelavati_data_with_codes.json'
with open(json_output_path, 'w') as file:
    json.dump(list_of_dicts, file, indent=4)

print(f"Data saved to {json_output_path}")

# Define the directory containing the images
image_dir = 'C:/Users/sudee/Documents/Projects/Leelavati Automation/dev-lv/src/assets/images/downloaded_images'

# List all files in the image directory
files = [f for f in os.listdir(image_dir) if os.path.isfile(os.path.join(image_dir, f))]

# Prepare the content for the text file
import_statements = []
mapping_entries = []

for i, file in enumerate(files):
    # Extract the filename without extension for variable name
    file_name = os.path.splitext(file)[0]
    
    # Create the import statement
    import_statement = f"import image{i+1} from '../../assets/images/downloaded_images/{file}';"
    import_statements.append(import_statement)
    
    # Create the mapping entry
    mapping_entry = f'    "{file_name}": image{i+1},'
    mapping_entries.append(mapping_entry)

# Combine the import statements and mappings
content = "\n".join(import_statements) + "\n\nconst images = {\n" + "\n".join(mapping_entries) + "\n    // Add more mappings as necessary\n};"

# Define the output file path for image import mappings
output_file_path = 'C:/Users/sudee/Documents/Projects/Leelavati Automation/dev-lv/src/assets/images/output_file.txt'

# Write the content to the text file
with open(output_file_path, 'w') as output_file:
    output_file.write(content)

print(f"Image import mapping file created successfully at {output_file_path}")
