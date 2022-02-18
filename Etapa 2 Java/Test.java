public class Test {
    public static void main(String[] args){

        Operator operator = new Operator();

        operator.method(10, 20);
        operator.method();

        operator.property2 = "4";

        System.out.println(operator.PROPERTY_1);

        Operator.property3 = 3;
    }
}
