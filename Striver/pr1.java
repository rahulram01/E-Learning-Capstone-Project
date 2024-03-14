import java.util.Scanner;

public class pr1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        scanner.close();

        String[] numbers = input.split(" ");
        int num1 = Integer.parseInt(numbers[0]);
        int num2 = Integer.parseInt(numbers[1]);

        int sum = calculateSumWithoutCarry(num1, num2);
        System.out.println(sum);
    }

    public static int calculateSumWithoutCarry(int num1, int num2) {
        int sum = 0;
        int multiplier = 1;

        while (num1 > 0 || num2 > 0) {
            int digit1 = num1 % 10;
            int digit2 = num2 % 10;
            int digitSum = (digit1 + digit2) % 10;

            sum += digitSum * multiplier;

            num1 /= 10;
            num2 /= 10;
            multiplier *= 10;
        }

        return sum;
    }
}
