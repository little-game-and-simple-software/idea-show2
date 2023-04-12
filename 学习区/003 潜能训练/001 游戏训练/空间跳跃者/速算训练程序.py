
import random
while True:
	x1 = random.randint(0,10)
	y1 = random.randint(0,10)
	z1 = random.randint(0,10)
	
	x2 = random.randint(0,10)
	y2 = random.randint(0,10)
	z2 = random.randint(0,10)
	
	vec3_1 = [x1,y1,z1]
	vec3_2 = [x2,y2,z2]
	print(vec3_1)
	print(vec3_2)
	pre_calcuate = vec3_1 + vec3_2
	print(pre_calcuate)
	result = input("请输入计算结果")
	if result == pre_calcuate:
		print("计算成功")
	else:
		print("计算失败")