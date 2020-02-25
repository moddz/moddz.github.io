print('这是一个教程中的范例游戏')
temp = input('猜猜心里想的是哪个数字？')
guess = int(temp)
if guess == 8:
    print('你猜中了！')
    print('猜中也没用')
else:
    print('猜错了，我想的是8！')
print('游戏结束')
