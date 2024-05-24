import pandas as pd

# Read the dataset
emails = pd.read_csv("spam/emails.csv")

def process_email(text):
    text = text.lower()
    return list(set(text.split()))

def calculate_prior(emails):
    spam_count = emails[emails["spam"] == 1].shape[0]
    total_count = emails.shape[0]
    return spam_count / total_count

def calculate_likelihood(emails, word):
    spam_emails = emails[emails["spam"] == 1]
    ham_emails = emails[emails["spam"] == 0]
    
    p_word_given_spam = spam_emails["words"].apply(lambda words: word in words).mean()
    p_word_given_ham = ham_emails["words"].apply(lambda words: word in words).mean()
    
    return p_word_given_spam, p_word_given_ham

def calculate_posterior(emails, word):
    p_spam = calculate_prior(emails)
    p_ham = 1 - p_spam
    
    p_word_given_spam, p_word_given_ham = calculate_likelihood(emails, word)
    
    p_word = emails["words"].apply(lambda words: word in words).mean()
    
    p_spam_given_word = (p_word_given_spam * p_spam) / p_word
    p_ham_given_word = (p_word_given_ham * p_ham) / p_word
    
    return p_spam_given_word, p_ham_given_word

def predict_naive_bayes(emails, word):
    p_spam_given_word, p_ham_given_word = calculate_posterior(emails, word)
    if p_spam_given_word > p_ham_given_word:
        return "spam"
    else:
        return "ham"

# Process the emails
emails["words"] = emails["text"].apply(process_email)

# Example usage
# word_to_predict = "payment"
# prediction = predict_naive_bayes(emails, word_to_predict)
# print(f"The email containing the word '{word_to_predict}' is predicted to be {prediction}.")

def input_text(text):
    words = process_email(text)
    predictions = [predict_naive_bayes(emails, word) for word in words]
    return predictions