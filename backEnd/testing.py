import os
from openai import OpenAI
import pandas as pd

os.environ['OPENAI_API_KEY'] = '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'

client = OpenAI()

# List of file paths for CSV files
file_paths = [
    
]

# Initialize an empty list to store all profanity words


# Iterate over each file path
# for file_path in file_paths:
    # Read the CSV file into a DataFrame
    # df = pd.read_csv(file_path)
    
    # Check if 'profanity' column exists in the DataFrame
    # if 'text' in df.columns:
        # Convert the 'profanity' column to string type and extract the profanity words
        # profanity_words = df['text'].astype(str).tolist()
        # Extend the all_profanity_words list
        # all_profanity_words.extend(profanity_words)
   # else:
      #  print(f"Warning: 'profanity' column not found in file '{file_path}'.")

user_input = input("Enter your message: ")  # Get user input as a sentence

prompt = 'There are 5 cars and 4 more cars come. Because there were 5 before and 4 came, we can use the equation 5 + 4 and get the total amount of cars.'

response = client.chat.completions.create(
    model='gpt-3.5-turbo',
    messages=[
        {'role': 'user', 
         'content': user_input},
        {'role': 'system',
        'content': 'Answer based on how the user texts'}
    ],
    temperature=1,
    max_tokens=1000,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )

# Append a message to the completion response based on whether profanity is found


print(response.choices[0].message.content)