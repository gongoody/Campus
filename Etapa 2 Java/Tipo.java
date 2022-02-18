public class Tipo{

    public static void main(String[] args){
        byte n = 126;

        int NUMERO_ENTERO = 10;

        System.out.println("126 ->" + n++);
        System.out.println("127 ->" + n++);
        System.out.println("128 ->" + n++);
        System.out.println("129 ->" + n++);
        System.out.println("130 ->" + n++);

        System.out.println(NUMERO_ENTERO);

        float valorFloat = 1234.567895f;
        double valorDouble = 1234.56789857468735487634d;

        System.out.println("Valor FLOAT (1234.567895)" + valorFloat);
        System.out.println("Valor DOUBLE (1234.567895)" + valorDouble);
        

        int nroInt = 25;
        double nroDouble = nroInt;

        System.out.println("Int: " + nroInt + " - Double " + nroDouble);
        System.out.println("Producto: " + (nroInt * nroDouble));

        long nro = 123456789123456789L;

        System.out.println("Ahora es double: " + ((double)nro));
        System.out.println("Ahora es int: " + ((int)nro));

        int a = 5;
        Integer b = 5;
        int c = b;

        System.out.println(a);
        System.out.println(b.doubleValue());
        System.out.println(c);

        System.out.println(Integer.MAX_VALUE);
        System.out.println(Integer.MIN_VALUE);
        System.out.println(Integer.SIZE);
        System.out.println(Integer.compare(4, 8));
        System.out.println(Integer.parseInt("34"));
        System.out.println(Integer.toBinaryString(4));

        boolean b1 = true;

        char ch1 = 't';
        char ch2 = '\t';
        char ch3 = '\u0074';

        System.out.println("t: " + ch1 + " - \\t: " + ch2 + " - \\u0074: " + ch3);

        int octal = 034;
        int hexa = 0x1C;

        String hola = "¿Hola que tal como estas?";
        String chau = "chau";

        
        hola.compareToIgnoreCase(chau);

        System.out.println(hola.length());
        System.out.println(hola.indexOf("tal"));

        System.out.println(hola + chau);

        System.out.println(hola.concat(chau));
    }
}