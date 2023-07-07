import json

my_file = open('Words.txt', 'r')
data = my_file.read()

data = data.split('\n')
data_new = []

for i in data:
    i = i.strip()
    if i not in data_new:
        data_new.append(i)

data = data_new
with open('data.json', 'w') as f:
    json.dump(data, f)