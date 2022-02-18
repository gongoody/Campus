import java.util.Scanner;

public class PalindromeRecognize {

    public static void main(String[] args){
        String str = null;

        if(args.length != 0){
            str = args[0];
        }else{
            Scanner in = new Scanner(System.in);
            str = in.nextLine();
            in.close();
        }
        if(isPalindrome(str)){
            System.out.println(str + " is a palindorme");
        }else{
            System.out.println(str + "is not a palindrome");
        }
    }

    private static boolean isPalindrome(String str){
        boolean isPalindrome = true;
        int length = str.length();

        for (int i = 0; i < length; i++){
            if(i >= (length - 1 - i)){
                break;
            }else{
                if(str.charAt(i) != str.charAt(length -1 - i)){
                    isPalindrome = false;
                    break;
                }
            }
        }
        return isPalindrome;
    }

}