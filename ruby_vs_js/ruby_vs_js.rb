 # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
 def print_numbers_divisible_by_three
   index = 1
   while index <= 1000
     if index % 3 == 0
       puts index
     end
     index += 1
   end
 end
 print_numbers_divisible_by_three


#









 def print_every_other_item(strings)
   index = 0
   strings.each do |string|
     if index % 2 == 0
       puts string
     end
     index += 1
   end
 end
 print_every_other_item(["a", "b", "c", "d", "e"])
