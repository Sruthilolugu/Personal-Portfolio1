class A
{
    int age;
    public void show(){
        System.out.println("from show");
    }
    
    class B{ 
        public void config(){
            System.out.println("configuration");
        }
    }
}
public class Demo2{
    public static void main(String args[]){
        A obj=new A();
        obj.show();
        A.B obj1=obj.new B();
        obj1.config();
    }
}