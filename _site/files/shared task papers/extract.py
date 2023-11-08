import os
import fitz  # PyMuPDF

def extract_title_and_authors(pdf_path):
    # Open the PDF file
    pdf_document = fitz.open(pdf_path)

    # Extract the text from the first page (you may need to adjust the page number)
    page = pdf_document[0]
    page_text = page.get_text()

    # Close the PDF file
    pdf_document.close()

    # Split the page text into lines
    lines = page_text.split('\n')

    # Extract the title (usually the first line)
    title = lines[0].strip()

    # Extract the authors (assuming they are on the second line)
    authors = lines[1].strip()

    return title, authors

# Get a list of all PDF files in the current directory
pdf_files = [file for file in os.listdir() if file.endswith(".pdf")]

# Iterate through each PDF and extract title and authors
for pdf_file in pdf_files:
    title, authors = extract_title_and_authors(pdf_file)
    print("Title:", title)
    print("Authors:", authors)
    print("=====")
