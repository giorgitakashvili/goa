family = ["nana", "toma", "giorgi"]
years = [34, 2, 14]
for i in range(len(family)):
    full_sentence = "My mom's name is: {}, My brother's name is: {}, My name is: {}. We have aged {} years in 10 years.".format(family[0], family[1], family[2], years[i])
    print(full_sentence)
    years[i] += 10