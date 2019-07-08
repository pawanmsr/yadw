import spacy

nlp = spacy.load('en_core_web_sm')

def pos_tagging(sentence):
    doc = nlp(sentence)
    tags = ''
    for entity in doc:
        tags += entity.text + ' [' + entity.pos_ + ']\t\t\t\t'
    return tags

def test():
    print(
        pos_tagging("\"Drawing upon my fine command of the English language, I said nothing.\" (Robert Benchley)")
    )

if __name__ == "__main__":
    test()