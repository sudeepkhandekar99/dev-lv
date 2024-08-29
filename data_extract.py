import pandas as pd
import json

# Load the Excel file
file_path = 'Leelavati_data.xlsx'
df = pd.read_excel(file_path)

# Convert all data in the DataFrame to uppercase
df = df.applymap(lambda x: str(x).upper() if pd.notna(x) else x)

# Set Stock and Price columns to 0
df['Stock'] = 0
df['Price'] = 0

# Function to generate the code
def generate_code(row):
    parts = []
    
    # Get the first two letters of MAIN-Category
    if pd.notna(row['MAIN-Category']):
        parts.append(row['MAIN-Category'][:2])
    
    # Get the first two letters of SUB-Category
    if pd.notna(row['SUB-Category']):
        parts.append(row['SUB-Category'][:2])
    
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

# Convert each row of the DataFrame into a dictionary and store it in a list
list_of_dicts = df.to_dict(orient='records')

# Save the list of dictionaries to a JSON file
with open('Leelavati_data_with_codes.json', 'w') as file:
    json.dump(list_of_dicts, file, indent=4)

print("Data saved to Leelavati_data_with_codes.json")
