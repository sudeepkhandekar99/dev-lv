import os
from PIL import Image

# Define the input and output directories
input_folder = r'C:\Users\sudee\Documents\Projects\Leelavati Automation\dev-lv\src\assets\images\cat_images'
output_folder = r'C:\Users\sudee\Documents\Projects\Leelavati Automation\dev-lv\src\assets\images\cat_images\new'

# Create output folder if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

def make_square(image):
    # Get the size of the original image
    width, height = image.size
    if width == height:
        # If the image is already square, return it as is
        return image

    # Calculate the size of the new square canvas
    square_size = max(width, height)
    
    # Create a new white square canvas
    new_image = Image.new("RGB", (square_size, square_size), (255, 255, 255))
    
    # Calculate position to paste the original image in the center of the new canvas
    paste_position = ((square_size - width) // 2, (square_size - height) // 2)
    
    # Paste the original image onto the white canvas
    new_image.paste(image, paste_position)
    
    return new_image

# Process each image in the input folder
for filename in os.listdir(input_folder):
    if filename.endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
        img_path = os.path.join(input_folder, filename)
        with Image.open(img_path) as img:
            # Make the image square
            square_img = make_square(img)
            
            # Save the modified image to the output folder
            square_img.save(os.path.join(output_folder, filename))

print("Images have been processed and saved in the /new folder.")
