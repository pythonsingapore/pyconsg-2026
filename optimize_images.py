import os
from PIL import Image

def optimize_image(input_path, output_path, max_size=(400, 400)):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        with Image.open(input_path) as img:
            # Convert to RGB if necessary (e.g. for PNG/JPEG conversion)
            if img.mode in ('RGBA', 'P') and output_path.endswith('.jpg'):
                img = img.convert('RGB')
            elif output_path.endswith('.png') and img.mode not in ('RGBA', 'RGB', 'P'):
                img = img.convert('RGBA')

            # Resize if larger than max_size, keeping aspect ratio
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Save with optimization
            img.save(output_path, 'PNG', optimize=True)
            print(f"Optimized and saved: {output_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Define paths
assets_dir = 'assets'
yiyuan_input = os.path.join(assets_dir, 'yiyuan-li.jfif')
yiyuan_output = os.path.join(assets_dir, 'yiyuan-li.png')

# Process images
optimize_image(yiyuan_input, yiyuan_output)
