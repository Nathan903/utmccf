import os
from PIL import Image
import pillow_heif

def heic_to_pdf(output_pdf="combined.pdf"):
    # Register HEIF support for Pillow
    pillow_heif.register_heif_opener()

    # Get all .heic files in the current directory (case-insensitive)
    heic_files = [f for f in os.listdir('.') if f.lower().endswith('.heic')]
    heic_files.sort()  # optional: sort alphabetically

    if not heic_files:
        print("No .heic files found in the current directory.")
        return

    images = []
    for file in heic_files:
        try:
            img = Image.open(file).convert("RGB")
            images.append(img)
            print(f"Loaded: {file}")
        except Exception as e:
            print(f"Skipping {file}: {e}")

    if not images:
        print("No valid images to convert.")
        return

    # Save all images as a single PDF
    output_file = os.path.join(os.getcwd(), output_pdf)
    images[0].save(output_file, save_all=True, append_images=images[1:])
    print(f"✅ Combined PDF saved as: {output_file}")

if __name__ == "__main__":
    heic_to_pdf()
