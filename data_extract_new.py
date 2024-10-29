import json
import requests
import pandas as pd

# Load the Excel file
file_path = 'Leelavati_data.xlsx'
df = pd.read_excel(file_path)

# Convert all data in the DataFrame to uppercase, except for the 'Images' column
columns_to_uppercase = df.columns.difference(['Images'])
df[columns_to_uppercase] = df[columns_to_uppercase].applymap(lambda x: str(x).upper() if pd.notna(x) else x)

# Check if 'Stock' and 'Price' columns exist, and set to 0 only if they are empty or non-numeric
if 'Stock' in df.columns:
    df['Stock'] = pd.to_numeric(df['Stock'], errors='coerce').fillna(0).astype(int)
else:
    df['Stock'] = 0

if 'Price' in df.columns:
    df['Price'] = pd.to_numeric(df['Price'], errors='coerce').fillna(0)
else:
    df['Price'] = 0.0

# Add an "Images" column if it doesn't exist
if 'Images' not in df.columns:
    df['Images'] = ''

# Modify the Images column to convert Google Drive links to direct links
# def convert_drive_link(link):
#     if isinstance(link, str) and 'drive.google.com/file/d/' in link:
#         file_id = link.split('/d/')[1].split('/')[0]
#         return f'https://drive.google.com/uc?export=view&id={file_id}'
#     return link

# df['Images'] = df['Images'].apply(convert_drive_link)

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

# Rename columns to the new names for JSON output
df.rename(columns={
    'MAIN CATEGORY': 'MAIN-Category',
    'SUB CATEGORY': 'SUB-Category',
    'Housing Size (mm)/Material': 'Housing_Size',
    'Output Function': 'Output_Function',
    'Supply Voltage': 'Supply_Voltage'
}, inplace=True)

# Replace NaN values with empty strings
df = df.fillna('')


# Function to resolve Google Drive URLs to the final redirect URL
# def resolve_google_drive_url(url):
#     if url: 
#         try:
#             response = requests.head(url, allow_redirects=True)
#             resolved_url = response.url
#             print(f"Original URL: {url} -> Resolved URL: {resolved_url}")
#             return resolved_url
#         except requests.RequestException as e:
#             print(f"Error resolving URL {url}: {e}")
#             return url
#     return url

# Apply the URL resolution function to the IMAGES column if it's not empty
# df['Images'] = df['Images'].apply(resolve_google_drive_url)

# Select the columns to include in the JSON
df_json = df[['Code', 'MAIN-Category', 'SUB-Category', 'BRAND', 'Model number', 'Stock', 'Price', 'Housing_Size', 'Range', 'Output_Function', 'Supply_Voltage', 'Connection', 'Specific', 'Images']]

# Convert each row of the selected DataFrame into a dictionary and store it in a list
list_of_dicts = df_json.to_dict(orient='records')

# Save the list of dictionaries to a JSON file
with open('Leelavati_data_with_codes.json', 'w') as file:
    json.dump(list_of_dicts, file, indent=4)

print("Data saved to Leelavati_data_with_codes.json")
