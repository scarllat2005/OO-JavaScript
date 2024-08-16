class calculadora:
    def soma (self,a,b):
        return a + b 

    def subtracao (self,a,b):
        return a - b 
    
    def multiplicacao (self, a,b):
        return a * b
    
    def divisao (self, a,b):
        if b == 0 :
           return "Erro divisao por zero"
        
        return a/b
         

    def restoDivisao(self, a,b):
        return a % b 

##exemplo de uso clases 

calc_basica = calculadora()
print ("soma", calc_basica.soma(10,5))

print ("subtracao.",calc_basica.subtracao(5,2))

print ("multiplicacao:", calc_basica.multiplicacao(10,5))

print ("divisao:" ,calc_basica.divisao (10,5))

cal_avancada = calculadora ()
print ("reto da divisão:", cal_avancada.restoDivisao(8,3))
