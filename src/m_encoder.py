import base64

def decode(data):
    
    with open("./logo.ascii", "rb") as logo:
        return base64.b64decode(logo.read())    
