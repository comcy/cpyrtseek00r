import m_parser
import m_encoder


def print_welcome():

    print("*"*80)

    print("Start ...")
    print(m_encoder.decode("test"))

    print("*"*80)

    m_parser.parse_file()

print_welcome()