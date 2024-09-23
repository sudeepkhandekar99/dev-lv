import os

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

# Define the output file path
output_file_path = 'C:/Users/sudee/Documents/Projects/Leelavati Automation/dev-lv/src/assets/images/output_file.txt'  # Replace with your desired output path

# Write the content to the text file
with open(output_file_path, 'w') as output_file:
    output_file.write(content)

print(f"File created successfully at {output_file_path}")
