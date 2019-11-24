import csv
import sys

blacklisted_fields = ['form fields', 'decision', 'notified', 'reviews sent', 'submitted', 'last updated']

replacements = {
    '#': 'number',
    'track #': 'trackNumber',
    'track name': 'trackName',
}

def cleanse_csv(input_fname, output_fname):
    with open(input_fname) as f:
        reader = csv.DictReader(f)
        rows = list(r for r in reader if r['decision'].lower().endswith('accept'))
    
    fields = [replacements.get(f, f) for f in reader.fieldnames if f not in blacklisted_fields] + ['format', 'trackFormat']

    for r in rows:
        if r['track #'] == '3':
            r['format'] = 'abstract'
        elif r['decision'] == 'probably accept':
            r['format'] = 'poster'
        elif r['decision'] == 'accept':
            r['format'] = 'oral'
        for f in blacklisted_fields:
            del r[f]
        for k, v in replacements.items():
            r[v] = r[k]
            del r[k]
        r['trackFormat'] = f"{r['trackNumber']} {r['format']}"

    with open(output_fname, 'w') as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)

def main():
    orig = sys.argv[1]
    target = 'src/data/submission.csv'
    cleanse_csv(orig, target)

if __name__ == "__main__":
    main()