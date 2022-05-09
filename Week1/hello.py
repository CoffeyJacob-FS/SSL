##imports date and creates obj
from datetime import date
today = date.today()
##gets date and formats it
date = today.strftime("%m/%d/%Y")
##outputs
print ("hello World!The date is: "+date)