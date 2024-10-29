import os
import json
import requests
import time

# Load the JSON file
json_file = 'Leelavati_data_with_codes.json'
with open(json_file, 'r') as file:
    data = json.load(file)

# Directory to save images
image_dir = 'downloaded_images'
os.makedirs(image_dir, exist_ok=True)

# Function to convert Google Drive link to a direct download link
def convert_drive_link(url):
    if 'drive.google.com/file/d/' in url:
        file_id = url.split('/d/')[1].split('/')[0]
        return f'https://drive.google.com/uc?export=download&id={file_id}'
    return url

# Function to download images with delay and error handling
def download_image(url, code, delay=1):
    url = convert_drive_link(url)  # Convert the link if it's a Google Drive link
    if url:
        try:
            image_response = requests.get(url, stream=True, timeout=10)
            if image_response.status_code == 200:
                # Attempt to determine the file extension, defaulting to .jpg
                extension = url.split('.')[-1].split('?')[0] if '.' in url else 'jpg'
                if len(extension) > 5:  # Handle cases where extension parsing fails
                    extension = 'jpg'
                image_filename = f"{code}.{extension}"
                image_path = os.path.join(image_dir, image_filename)
                
                with open(image_path, 'wb') as image_file:
                    for chunk in image_response.iter_content(1024):
                        image_file.write(chunk)
                print(f"Image downloaded: {image_filename}")
            else:
                print(f"Failed to download image for {code} from {url}. Status code: {image_response.status_code}")
        except requests.RequestException as e:
            print(f"Error downloading image for code {code} from {url}: {e}")
    else:
        print(f"No URL provided for code: {code}")

    # Delay to avoid hitting rate limits
    time.sleep(delay)

# Iterate through the list of dictionaries and download each image
for item in data:
    image_url = item.get('Images')
    code = item.get('Code')
    download_image(image_url, code)

print("All images have been downloaded.")
