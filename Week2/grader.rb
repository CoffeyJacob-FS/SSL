#Simple grader by jake coffey 4/17/22 
print 'What is the students name?'
name = gets.chomp
loop= true
while loop do
print "what is #{name}s grade? "
stgrade = gets.chomp
grade= stgrade.to_i
    if grade>100 || grade<0
        print'grade must be between 0 and 100!'
    else
        loop=false
    end

if grade<60
    print "#{name} got a F :("

elsif grade>=60 and grade<70 
    print "#{name} got a D :/"

elsif grade>=70 and grade <80 
    print "#{name} got a C :L"

elsif grade>=80 and grade<90 
    print "#{name} got a B :)"

elsif grade>=90 and grade<100 
    print "#{name} got an A  :)!"
end
end