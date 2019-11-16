import csv
import sys

blacklisted_fields = ['form fields', 'decision', 'notified', 'reviews sent', 'submitted', 'last updated']

def cleanse_csv(input_fname, output_fname):
    with open(input_fname) as f:
        reader = csv.DictReader(f)
        rows = list(r for r in reader if r['decision'].lower() == 'accept')
    
    fields = [f for f in reader.fieldnames if f not in blacklisted_fields]

    for r in rows:
        for f in blacklisted_fields:
            del r[f]

    with open(output_fname, 'w') as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)

def main():
    orig = sys.argv[1]
    cleanse_csv(orig, f'clean-{orig}')

if __name__ == "__main__":
    main()