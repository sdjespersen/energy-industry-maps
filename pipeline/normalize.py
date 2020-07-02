import logging
import pandas as pd
import sys


USAGE = f"python {__file__} <csv_input_file> <csv_output_file>"

logging.basicConfig(level='INFO', format='%(levelname)s: %(message)s')


CATEGORY_MAPPING = {
    'Academia': 'Academia/Research',
    'Buildings': 'Built Environment',
    'Design': 'Architecture/Design',
    'Enabling Technology/Components': 'Enabling Technologies/Components',
    'Energy Management': 'Energy Systems/Management',
    'IIoT/IoT': 'IoT/IIoT',
    'Incubator/Accelerator': 'Accelerator/Incubator',
    'MaaS': 'Mobility as a Service',
    'Research': 'Academia/Research',
    'Cybersecurity': 'Security/Cybersecurity',
}
COUNTERS = {k: 0 for k in CATEGORY_MAPPING}


def map_category_name(c):
    if c in CATEGORY_MAPPING:
        COUNTERS[c] += 1
        return CATEGORY_MAPPING[c]
    return c


def normalize_category_names(df):
    for col in ('tax1', 'tax2', 'tax3'):
        df[col] = df[col].apply(map_category_name)
    return df


def main():
    if len(sys.argv) != 3:
        print(USAGE)
        sys.exit()
    input_file, output_file = sys.argv[1], sys.argv[2]
    df = pd.read_csv(input_file, index_col='idx')
    df = normalize_category_names(df)
    for k in COUNTERS:
        if COUNTERS[k]:
            logging.info(
                f"Replaced {COUNTERS[k]} instances of '{k}' with "
                f"'{CATEGORY_MAPPING[k]}'")
    df.round(6).to_csv(output_file)
    logging.info(f"Wrote output to {output_file}")


if __name__ == '__main__':
    main()
