#Must be run in python 3!
#Simple grader by jake coffey 5/15/22 

student= input("please enter the students name:")
loop = True
while(loop):
    strGrade=input(f' please input {student}s grade:')
    intGrade= float(strGrade)
    if intGrade>100 or intGrade<0 :
        print ("Grades must be between 0 and 100!")
    
    else:
        loop=False
    

if intGrade<60:
    print (f'{student} got a F :(')

elif intGrade>=60 and intGrade<70 :
    print( f'{student} got a D :/')

elif intGrade>=70 and intGrade <80 :
    print (f'{student} got a C :L')

elif intGrade>=80 and intGrade<90 :
    print (f'{student} got a B :)')

elif intGrade>=90 and intGrade<100 :
    print (f'{student} got an A  :)!')