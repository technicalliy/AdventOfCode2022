file = open('calories.txt', 'r');
lines = file.readlines()

currTracker = 0;

amts = [];

for item in lines:
	if item != '\n':
		currTracker += int(item)
	else:
		amts.append(currTracker)
		currTracker = 0

amts.sort()

result = 0
for item in amts[-3:]:
	result += item

print result