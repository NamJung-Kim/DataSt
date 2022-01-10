"""
stack - 괄호 맞추기
"""
list = ['(', '(', ')', ')']
stack = []
for i in list:
    if i == '(':
        stack.append('(')
    elif i == ')':
        stack.pop()
    else:
        print('Error!')
if len(stack) > 0:
    print('False!!')
else:
    print('True!!')

