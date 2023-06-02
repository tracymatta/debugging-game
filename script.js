var easy = {
    "JS": [
        {
            "id": 1,
            "question": `
1    #include <stdio.h>
2
3    int main() {
4        int arr[5];
5        arr[0] = 1;
6        arr[1] = 2;
7        arr[2] = 3;
8        arr[3] = 4;
9        
10       for (int i = 0; i < 5; i++) {
11           printf("Value at index %d is: %d\n", i, arr[i]);
12       }
13       
14       return 0;
15   }`,
            "answer": "10",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": `
1   myNumber = 1
2
3    if(myNumber < 10):
4        addOne(myNumber);                        
5    
6    function addOne(myNumber):
7        myNumber += 1`,
            "answer": "4",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": `
1   .item:hover {
2    backgroundColor: #f00;
3    width: 300px;
4    height: 300px;
5   }`,
            "answer": "2",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": `
1    public class Test {
2        public static void main(String[] args) {
3            int a = 5;
4            int b = 10;
5            int sum = add(a, b); 
6            
7            System.out.println("The sum is: " + sum);
8        }
9    
10       public static int add(int x, int y, int z) {
11           return x + y + z;
12       }
13   }`,
            "answer": "5",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": `
1    def calculate_average(numbers)
2        total = 0
3        for num in numbers:
4            total += num
5        average = total / len(numbers)
6        return average
7
8    nums = [3, 7, 2, 8, 4]
9    avg = calculate_average(nums)
10   print("The average is:", avg)`,
            "answer": "1",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": `
1    #include <stdio.h>
2
3    void main() {
4        int n;
5        printf("Enter an integer\n");
6        scanf("%d", &n)
7        while(n ! = 0) {
8            printf("Enter an integer\n");
9            scanf("%d", &n);
10       }
11       printf("You are out of the loop");
12   }`,
            "answer": "7",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": `
1    #include<stdio.h>
2
3    int main() {
4        int a, b, sum;
5        printf("Enter value for A" );
6        scanf("%d", &a); 
7        printf("Enter value for B" );
8        scanf("%d", b);
9        sum = a + b;
10       printf("The Sum of A & B is : %d", sum);
11    
12       return 0;
13   }`,
            "answer": "8",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": `
1    #include <stdio.h>
2 
3    int main() {
4    
5        int n = 5;
6        int values[n];
7        values[1] = 1;
8        values[2] = 2;
9        values[3] = 3;
10       values[4] = 4;
11       values[5] = 5;
12        
13       printf("Displaying integers: ");
14        
15       for(int i = 1; i < 5; ++i) {
16           printf("%d\n", values[i]);
17           sum += values[i];
18       }
19        
20       int average = (double) sum / n;
21        
22       printf("Average = %.2lf", average);
23       return 0;
24   }`,
            "answer": "11",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": `
1    #include <stdio.h>
2
3    int main() {
4        int i = 0;
5        int arr[5] = {1, 2, 3, 4, 5};
6        int sum = 0;
7    
8        while (++i < 5) {
9            sum += arr[i];
10       }
11    
12       printf("The sum of the array is %d\n", sum);
13    
14       return 0;
15   }`,
            "answer": "8",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": `
1   SELECT customer_id, SUM(total_price) AS total_spent 
2   FROM orders
3   GROUP BY customer_id 
4   ORDER total_spent DESC`,
            "answer": "4",
            "score": 0,
            "status": ""
        },
        {
            "id": 11,
            "question": `
1    public class Main {
2        public static void main(String[] args) {
3            int n = 100;
4            double sum = 0;
5            for (int i = 1; i <= n; i++) {
6                sum += 1 / (i * Math.sqrt(i));
7            }
8            System.out.println("The sum of the series is: " + sum)
9        }
10   }`,
            "answer": "8",
            "score": 0,
            "status": ""
        },
        {
            "id": 12,
            "question": `
1  public class Main {
2        public static void main(String[] args) {
3            Scanner sc = new Scanner(System.in);
4            System.out.print("Enter the first number: ");
5            int num1 = sc.nextInt();
6            System.out.print("Enter the second number: ");
7            int num2 = sc.nextInt();
8            System.out.print("Enter the third number: ");
9            int num3 = sc.nextInt();
10    
11           int max = 0;
12           if (num1 >= num2) {
13               if (num1 => num3) {
14                   max = num1;
15               } else {
16                   max = num3;
17               }
18           } else {
19               if (num2 >= num3) {
20                   max = num2;
21               } else {
22                   max = num3;
23               }
24           }
25    
26           System.out.println("The maximum number is: " + max);
27       }
28   }`,
            "answer": "13",
            "score": 0,
            "status": ""
        },
        {
            "id": 13,
            "question": `
1    public class Main {
2        public static void main(String[] args) {
3            double randomNumber = math.random() * 10; 
4            int truncatedNumber = (int) randomNumber;
5            System.out.println("Random number: " + truncatedNumber);
6        }
7    }`,
            "answer": "3",
            "score": 0,
            "status": ""
        },
        {
            "id": 14,
            "question": `
1    public class Main {
2        public static void main(String[] args) {
3            Scanner myscan = new Scanner(System.in); 
4            System.out.print("Enter the type of glasses you like to buy:"); 
5            char type = myscan.next().charAt(0); 
6            if (type == 'p' || type == 'P')
7            {
8                System.out.print("Enter the coating code: ");
9                int code = myscan.nextInt();
10               if (code == 0) { 
11                   cost = 40 + 12.5;
12                   System.out.println("The total cost is $" + cost); 
13               } else if (code == 1) { 
14                   cost = 40 + 9.99; 
15                   System.out.println("The total cost is $" + cost);
16               } else {
17                   System.out.println("Invalid coating type code!"); 
18               }
19           } else if (type == 'n' || type == 'N') {
20               cost = 25;
21               System.out.println("The total cost is $" + cost);  
22           } else {
23               System.out.println("Invalid Type of glasses ");
24           }    
25       }
26   }`,
            "answer": "20",
            "score": 0,
            "status": ""
        },
        {
            "id": 15,
            "question": ` 
1    #include <stdio.h>
2
3    int main() {
4        printf("Hello, World!\n\n");
5    
6        printf("    *    \n");
7        printf("   ***   \n");
8        printf("  *****  \n");
9        printf(" ******* ");
10    
11       return 0;
12   }`,
            "answer": "9",
            "score": 0,
            "status": ""
        },
        {
            "id": 16,
            "question": `
1    #include <stdio.h>
2    #define ARRAY_SIZE 5
3    
4    int main() {
5        printf("Hello, World!\n\n");
6        
7        int arr[ARRAY_SIZE] = {1,10,3,122,5};
8        int max = arr[0];
9    
10       for(int i = 1; i < ARRAY_SIZE; i++) {
11           if(max > arr[i]) {
12               max = arr[i];
13           }
14       }
15    
16       printf("MAXIMUM NUMBER : %i.\n", max);
17   
18       return 0;
19   }`,
            "answer": "11",
            "score": 0,
            "status": ""
        },
        {
            "id": 17,
            "question": `
1    #include <stdio.h>
2    #define ARRAY_SIZE 5
3    
4    int main()
5    {
6        char* first_string = "Hello, ";
7        char* second_string = "World!";
8        printf(first_string + second_string);
9        
10       return 0;
11   }`,
            "answer": "8",
            "score": 0,
            "status": ""
        },
        {
            "id": 18,
            "question": `
1    public class Debug {
2        public static void main(String[] args) {
3            int[] arr = {1, 2, 3, 4, 5};
4            for (int i = 0; i < arr.length; i++) {
5                System.out.println(arr[i+1]);
6            }
7        }
8    }`,
            "answer": "5",
            "score": 0,
            "status": ""
        },
        {
            "id": 19,
            "question": `
1    public class HelloWorld {
2        public static void main(String[] args) {
3            System.out.println("Hello World!")
4        }
5    }`,
            "answer": "3",
            "score": 0,
            "status": ""
        },
    ]
}

var medium = {
    "JS": [
        {
            "id": 1,
            "question": `
1    function calculateAverage(nums) {
2        var sum;
3        for (var i = 0; i < nums.length; i++) {
4            sum += nums[i];
5        }
6        var avg = sum / nums.length;
7        return avg;
8    }
9    var nums = [1, 2, 3, 4, 5];
10   var avg = calculateAverage(nums);
11   console.log(avg);`,
            "answer": "4",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": `
1    #include <iostream>
2
3    int main() {
4        int x = 5;
5        int y = 10;
6        
7        int sum = x + y;
8        std::cout << "The sum of x and y is: " << sum << std::endl;
9        
10       int product = 1;
11       for (int i = 0; i <= 10; i++) {
12           product *= i;
13       }
14       std::cout << "The product of the first 10 integers is: " << product << std::endl;
15       
16       int z = sum * x + y;
17       std::cout << "The result of the calculation is: " << z << std::endl;
18        
19       return 0;
20   }`,
            "answer": "11",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": `
1   def compute_average(num_list):
2        total = 0
3        num_items = 0
4    
5        for num in num_list:
6            total += num
7            num_items += 1
8    
9        average = total / num_items
10    
11       return average`,
            "answer": "9",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": `
1    <?php
2    $string = "Hello, world!";
3    $substring = substr($string, 7, 12); 
4    echo $substring; 
5    ?>`,
            "answer": "3",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": `
1    #include <stdio.h>
2    #define INT 4
3    
4    int main() {
5        int arr[10];
6        int size = sizeof(arr) / sizeof(INT); 
7        printf("Array size is: %d\n", size);
8        return 0;
9    }`,
            "answer": "6",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": `
1    #include <stdio.h>
2    #include <string.h>
3
4    int main() {
5        char str[1000];  
6        int l, n, comp = 0; 
7        printf("Enter the string to check : ");
8        gets(str);
9        n = strlen(str); 
10       for(l = 0; l < n/2; l++) {
11           if(str[l] == str[n - l]) {
12               comp++;
13           }
14       }
15       if(comp == l) {
16           printf("The entered string is a palindrome");
17       }
18       else {
19           printf("The entered string is not a palindrome");
20       }
21       return 0;
22   }`,
            "answer": "11",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": `
1    #include <stdio.h>
2
3    int tail_recursive_factorial(int n, int acc) {
4        if (n == 0) {
5            return acc;
6        } else {
7            return n * tail_recursive_factorial(n - 1, n * acc);
8        }
9    }
10    
11   int main() {
12       int n = 5;
13       int result = tail_recursive_factorial(n, 1);
14    
15       printf("The factorial of %d is %d\n", n, result);
16    
17       return 0;
18   }`,
            "answer": "7",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": `
1    #include <stdio.h>
2 
3    int gcd(int a, int b) {
4        
5        while (b != 0) {
6            temp = b;
7            b = a % b;
8            a = temp;
9        }
10       return a;
11   }
12    
13   int main() {
14       int num1, num2, result;
15    
16       printf("Enter two positive integers: ");
17       scanf("%d %d", &num1, &num2);
18       result = gcd(num1, num2);
19    
20       printf("The GCD of %d and %d is %d\n", num1, num2, result);
21    
22       return 0;
23   }`,
            "answer": "6",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": `
1    import java.util.Scanner;
2    public class Main {
3        public static void main(String[] args) {
4            Scanner sc = new Scanner(System.in);
5            System.out.print("Enter a number: ");
6            int num = sc.nextInt();
7            if(num < 0) {
8                System.out.println("Error: Negative number!");
9            } else {
10               int result = findFactorial(num);
11               System.out.println(num + "! = " + result);
12           }
13       }
14    
15       public static int findFactorial(int n) {
16           if(n == 1) {
17               return 1;
18           } else {
19               return n * findFactorial(n);
20           }
21       }
22   }`,
            "answer": "19",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": `
1    using System;
2
3    public class Program {
4        static void Main(string[] args) {
5            double fahrenheit = 100;
6            double celsius = FahrenheitToCelsius(fahrenheit);
7            Console.WriteLine("{0} Fahrenheit is equal to {1} Celsius", fahrenheit, celsius);
8        }
9    
10       static double FahrenheitToCelsius(double fahrenheit) {
11           double celsius = 5.0 / 9.0 * (fahrenheit - 32);
12           return celsius;
13       }
14   }`,
            "answer": "11",
            "score": 0,
            "status": ""
        },
        {
            "id": 11,
            "question": `
1    #include <stdio.h>
2    #define ARRAY_SIZE 5
3    
4    int main() {
5        printf("Hello, World!\n\n");
6        
7        int arr[ARRAY_SIZE] = {1, 10, 3, 122, 5};
8        int max = arr[0];
9    
10       for(int i = 1; i < ARRAY_SIZE; i++) {
11           for(int j = 0; j < ARRAY_SIZE - i; j++) {
12               if(arr[j] > arr[j + 1]) {
13                   int a = arr[j];
14                   int b = arr[j + 1];
15                   
16                   a = b;
17                   b = a;
18    
19                   arr[j] = a;
20                   arr[j + 1] = b;
21               }
22           }
23       }
24    
25       for(int i = 0; i < ARRAY_SIZE; i++) {
26           printf("%i ", arr[i]);
27       }
28       printf(" this is a sorted array\n");
29    
30       return 0;
31   }`,
            "answer": "16",
            "score": 0,
            "status": ""
        },
        {
            "id": 12,
            "question": `
1   public class A {
2        public static void main(String[] args){
3            if (true)
4                break;
5        }
6    }`,
            "answer": "4",
            "score": 0,
            "status": ""
        },
        {
            "id": 13,
            "question": `
1    public class Main {
2        public static void main(String[] args) {
3            int x;
4            System.out.println(x);
5        }
6    }`,
            "answer": "4",
            "score": 0,
            "status": ""
        },
        {
            "id": 14,
            "question": `
1    public class FinalHashMap {
2        private static final Map map = new HashMap();
3        public static void main(String[] args) {
4            map.put("param1", "value1");
5            map.put("param2", "value2");
6            map = new HashMap();
7        }
8    }`,
            "answer": "6",
            "score": 0,
            "status": ""
        },
        {
            "id": 15,
            "question": `
1    public class FinalHashMap {
2        private final Map map = new HashMap();
3        public static void main(String[] args) {
4            map.put("param1","value1");
5            map.put("param2","value2");
6            map = new HashMap();
7        }
8    }`,
            "answer": "6",
            "score": 0,
            "status": ""
        },
        {
            "id": 16,
            "question": `
1    class Node {
2        int data;
3        Node next;
4        
5        public Node(int data) {
6            this.data = data;
7            next = null;
8        }
9    }
10    
11   public class MyLinkedList {
12       private Node head;
13        
14       public void add(int data) {
15           Node newNode = new Node(data);
16           if (head == null) {
17               head = newNode;
18               return;
19           }
20           Node current = head;
21           while (current.next != null) {
22               current = current.next;
23           }
24           current.next = newNode;
25       }
26        
27       public void printList() {
28           Node current = head;
29           while (current != null) {
30               System.out.println(current.data);
31               current = current.next;
32           }
33       }
34        
35       public static void main(String[] args) {
36           MyLinkedList myList = new MyLinkedList();
37           myList.add(1);
38           myList.add(2);
39           myList.add(3);
40           printList();
41       }
42   }`,
            "answer": "40",
            "score": 0,
            "status": ""
        },
        {
            "id": 17,
            "question": `
1    public class MyArray {
2        private int[] arr;
3        
4        public MyArray(int size) {
5            arr = new int[size];
6        }
7        
8        public void set(int index, int value) {
9            arr[index] = value;
10       }
11        
12       public int get(int index) {
13           return arr[index];
14       }
15        
16       public static void main(String[] args) {
17           MyArray myArray = new MyArray(3);
18           myArray.set(0, 1);
19           myArray.set(1, 2);
20           myArray.set(2, 3);
21           System.out.println(myArray[1]);
22       }
23   }`,
            "answer": "21",
            "score": 0,
            "status": ""
        },
    ]
}

var hard = {
    "JS" : [
        {
            "id": 1,
            "question": `
1    public function show($id)
2    {
3        $user = User::find($id);
4        if ($user) {
5            return view('user.show', compact('user'));
6        } else {
7            return view('error.404');
8        }
9    }`,
            "answer": "7",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": `
1    int isGameOver(struct gameState *state) {
2        int i, j;
3        
4        //if stack of Province is empty, the game ends
5        if(state->supplyCount[province] == 0) {
6            return 0;
7        }
8        
9        //if three supply pile are at 0, the game ends
10       j = 0;
11       for(i = 0; i < 25; i += 1) {
12           if(state->supplyCount[i] == 0) {
13               j += 1;
14           }
15       }
16        
17       if(j >= 3) {
18           return 0;
19       }
20        
21       return 1;
22   }`,
            "answer": "5",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": `
1    #include <stdio.h>
2
3    int gcd(int a, int b) {
4        if (b == 0) {
5            return a;
6        }
7        return gcd(b, a / b);
8    }
9    
10   int lcm(int a, int b) {
11       return (a * b) / gcd(a, b);
12   }
13    
14   int main() {
15       int num1, num2, result;
16       printf("Enter the first number: ");
17       scanf("%d", &num1);
18       printf("Enter the second number: ");
19       scanf("%d", &num2);
20       result = lcm(num1, num2);
21       printf("The LCM of %d and %d is %d.\n", num1, num2, result);
22       return 0;
23   }`,
            "answer": "7",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": `
1    void reverseLinkedList(struct Node** head_ref) {
2        struct node *prev = NULL;
3        struct node *current = (*head_ref);
4        struct node *next = NULL;
5    
6        while (current != NULL) {
7            next = current->next;
8            prev = current;
9            current->next = prev;
10           current = next;
11       }
12        
13       (*head_ref) = prev;
14   }`,
            "answer": "8",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": `
1    #include <stdio.h>
2    #define ARRAY_SIZE 5
3    
4    int main() {
5        printf("Hello, World!\n\n");
6        
7        int arr[ARRAY_SIZE] = {1, 10, 3, 122, 5};
8        int max = arr[0];
9    
10       for(int i = 1; i < ARRAY_SIZE; i++) {
11           for(int j = 0; j < ARRAY_SIZE - i; j--) {
12               if(arr[j] > arr[j + 1]) {
13                   int aux = arr[j];
14                   arr[j] = arr[j + 1];
15                   arr[j + 1] = aux;
16               }
17           }
18       }
19    
20       for(int i = 0; i < ARRAY_SIZE; i++) {
21           printf("%i ", arr[i]);
22       }
23       printf(" this is a sorted array\n");
24   
25       return 0;
26   }`,
            "answer": "11",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": `
1    #include <stdio.h>
2
3    int main() {
4        printf("Hello, World!\n\n");
5    
6        int num;
7        printf("Enter a number: ");
8        
9        scanf("%i", &num);
10   
11       printf("00%i\n", num);
12    
13       return 0;
14   }`,
            "answer": "11",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": `
1    import java.io.FileNotFoundException; 
2    import java.io.IOException; 
3    public class ExceptionInterviewQuestion_01 { 
4        public static void main(String[] args) {
5            try { 
6                multiple(); 
7            } catch (FileNotFoundException | IOException ex) {
8                ex.printStackTrace(); 
9            }
10       }
11       public static void multiple() throws IOException, FileNotFoundException { 
12           System.out.println("Inside multiple"); 
13       }
14   }`,
            "answer": "7",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": `
1  public class Widening1 {
2        public void f1(Object o1) {
3            System.out.println("Inside f1 with object as argument");
4        }
5        public void f1(String s) {
6            System.out.println("Inside f1 with String as argument");
7        }
8        public void f1(Integer s){
9            System.out.println("Inside f1 with Integer as argument");
10       }
11       public static void main(String[] args) {
12           new Widening1().f1(null);
13       }
14   }`,
            "answer": "12",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": `
1    #include <stdio.h>
2    #define ARRAY_SIZE 5
3    
4    int main() {
5        printf("Hello, World!\n\n");
6        
7        int arr[ARRAY_SIZE] = {1, 10, 3, 122, 5};
8        int max = arr[0];
9    
10       for(int i = 1; i < ARRAY_SIZE; i++) {
11           for(int j = 0; j < ARRAY_SIZE - i; j++) {
12               if(arr[j] < arr[j + 1]) {
13                   int aux = arr[j];
14                   arr[j] = arr[j + 1];
15                   arr[j + 1] = aux;
16               }
17           }
18       }
19    
20       for(int i = 0; i < ARRAY_SIZE; i++) {
21           printf("%i ", arr[i]);
22       }
23       printf(" this is a sorted array\n");
24    
25       return 0;
26   }`,
            "answer": "12",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": `
1    #include <stdio.h>
2    #define ARRAY_SIZE 5
3    
4    int main() {
5        printf("Hello, World!\n\n");
6        
7        int arr[ARRAY_SIZE] = {1, 10, 3, 122, 5};
8        int max = arr[0];
9    
10       for(int i = 1; i < ARRAY_SIZE; i++) {
11           for(int j = 0; j < ARRAY_SIZE - i; j++) {
12               if(arr[j] > arr[j + 1]) {
13                   int aux = arr[j];
14                   arr[j] = arr[j + 1];
15                   arr[j + 1] = arr[j];
16               }
17           }
18       }
19    
20       for(int i = 0; i < ARRAY_SIZE; i++) {
21           printf("%i ", arr[i]);
22       }
23       printf(" this is a sorted array\n");
24    
25       return 0;
26   }`,
            "answer": "15",
            "score": 0,
            "status": ""
        },
        {
            "id": 11,
            "question": `
1    #include <stdio.h>
2    #define ARRAY_SIZE 5
3    
4    int main() {
5        printf("Hello, World!\n\n");
6        
7        int arr[ARRAY_SIZE] = {1, 10, 3, 122, 5};
8        int max = arr[0];
9    
10       for(int i = 1; i < ARRAY_SIZE; i++) {
11           for(int j = 0; j < ARRAY_SIZE - i; j++) {
12               if(arr[j] > arr[j + 1]) {
13                   int aux = arr[j + 1];
14                   arr[j] = arr[j + 1];
15                   arr[j + 1] = aux;
16               }
17           }
18       }
19    
20       for(int i = 0; i < ARRAY_SIZE; i++) {
21           printf("%i ", arr[i]);
22       }
23       printf(" this is a sorted array\n");
24    
25       return 0;
26   }`,
            "answer": "13",
            "score": 0,
            "status": ""
        },
        {
            "id": 12,
            "question": `
1    #include <stdio.h>
2    #define ARRAY_SIZE 5
3    
4    int main() {
5        printf("Hello, World!\n\n");
6        
7        int arr[ARRAY_SIZE] = {1, 10, 3, 122, 5, 0};
8        int max = arr[0];
9    
10       for(int i = 1; i < ARRAY_SIZE; i++) {
11           for(int j = 0; j < ARRAY_SIZE - i; j++) {
12               if(arr[j] > arr[j + 1]) {
13                   int aux = arr[j];
14                   arr[j] = arr[j + 1];
15                   arr[j + 1] = aux;
16               }
17           }
18       }
19    
20       for(int i = 0; i < ARRAY_SIZE; i++) {
21           printf("%i ", arr[i]);
22       }
23       printf(" this is a sorted array\n");
24    
25       return 0;
26   }`,
            "answer": "7",
            "score": 0,
            "status": ""
        },
    ]
}

var selectedCategory = ""; // Added variable to store the selected category
var selectedQuestions = [];
var selectedArray = [];


var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = 0;
    

    this.displayQuiz = function (cque) {
        this.currentque = cque;

        if(cque == 0) {
            if (selectedCategory === "easy") {
                selectedArray = easy.JS;
            } else if (selectedCategory === "medium") {
                selectedArray = medium.JS;
            } else if (selectedCategory === "hard") {
                selectedArray = hard.JS;
            }
            console.log(selectedCategory);
    
            totalque = 5;
            selectedQuestions = getRandomQuestions(selectedArray, totalque);
            console.log(selectedQuestions);
        }

        if (this.currentque < totalque) {
            $("#tque").html(totalque);
            $("#previous").attr("disabled", false);
            $("#next").attr("disabled", false);
            var question = selectedQuestions[this.currentque];
            $("#question").html('<pre>' + question.question + '</pre>');
            $("#qid").html(this.currentque + 1);
        }
        if (this.currentque <= 0) {
            $("#previous").attr("disabled", true);
        }
        if (this.currentque >= totalque) {
            $('#next').attr('disabled', true);
            return this.showResult(this.score);
        }
    }

    // Helper function to get randomly selected questions
    function getRandomQuestions(array, count) {
        var shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    this.showResult = function (scr) {
        $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
        for (var j = 0; j < totalque; j++) {
            var res;
            if (selectedArray[j].score == 0) {
                res = '<span class="wrong">' + selectedArray[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
            } else {
                res = '<span class="correct">' + selectedArray[j].score + '</span><i class="fa fa-check c-correct"></i>';
            }
            $("#result").append(
                '<div class="result-question"><span>Q ' + (j + 1) + '</span> &nbsp;' + selectedArray[j].question + '</div>' +
                '<div><b>Correct answer:</b> &nbsp;' + selectedArray[j].answer + '</div>' +
                '<div class="last-row"><b>Score:</b> &nbsp;' + res +
                '</div>'
            );
        }
    }

    this.checkAnswer = function (guess) {
        var answer = selectedArray[this.currentque].answer;
        if (guess === answer) {
            selectedArray[this.currentque].score = 1;
            selectedArray[this.currentque].status = "correct";
            this.score++;
        } else {
            selectedArray[this.currentque].score = 0;
            selectedArray[this.currentque].status = "wrong";
        }
    }

    this.changeQuestion = function (cque) {
        this.currentque = this.currentque + cque;
        this.displayQuiz(this.currentque);
    }
}

var quiz = new quizApp();
var selectedopt;

$(document).ready(function () {

    $("#category-form").show();

    // Handle category selection
    $("#category-form").on("submit", function (e) {
        e.preventDefault();
        selectedCategory = $("input[name='category']:checked").val();
        console.log(selectedCategory);

        // Hide category selection options
        $("#category-form").hide();
        

        // Display the quiz for the selected category
        quiz.displayQuiz(0);
    });

    //quiz.displayQuiz(0);

    $('#next').click(function (e) {
        e.preventDefault();
        var userGuess = $("#user-guess").val();
        if (userGuess) {
            quiz.checkAnswer(userGuess);
        }
        quiz.changeQuestion(1);
        $("#user-guess").val("");
    });

    $('#previous').click(function (e) {
        e.preventDefault();
        var userGuess = $("#user-guess").val();
        if (userGuess) {
            quiz.checkAnswer(userGuess);
        }
        quiz.changeQuestion(-1);
        $("#user-guess").val("");
    });
});
