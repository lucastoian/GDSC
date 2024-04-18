import pandas as pd
xl = pd.ExcelFile('PokemonTCG_EmptyCheckList_v9.3.xlsm')


df = xl.parse('151')


# Select the required columns
required_columns = ['Name', 'Set Name', 'Number', 'Type', 'HP', 'Stage', 'Rarity']
base_url = "https://tcgmarket.s3.eu-west-3.amazonaws.com/pokemon/singles/151/SV3pt5_EN_"

# Define a function to create SQL insert statements for the dataframe rows
def create_insert_statements(df, base_url, expansion_id=86):
    insert_statements = []

    for index, row in df.iterrows():
     # Convert to string and escape single quotes for SQL
        name = str(row['Name']).replace("'", "''")
        set_name = str(row['Set Name'])
        # Construct the image URL by appending the iteration number to the base URL
        image_url = f"{base_url}{index + 1}.png"

        # Format the INSERT statement for SQL
        insert_statement = f"INSERT INTO tcg.Card (name, number, image, rarity, stage, type, hp, set_name, expansion_id, description, price, quantity) VALUES ('{name}', '{row['Number']}', '{image_url}', '{row['Rarity']}', '{row['Stage']}', '{row['Type']}', {row['HP'] if pd.notna(row['HP']) else 'NULL'}, '{set_name}', {expansion_id}, NULL, NULL, NULL);"
        insert_statements.append(insert_statement)
    
    return insert_statements

# Check if all required columns are in the DataFrame and create the insert statements

insert_statements = create_insert_statements(df[required_columns], base_url)



f = open("insert", "w")
for s in insert_statements:
    f.write(s + '\n')
f.close()

print(insert_statements)

