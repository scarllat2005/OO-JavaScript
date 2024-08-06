class Programa:
    def __init__(self, nome, ano):
        self.__nome = nome.title()
        self.ano = ano
        self.__likes = 0
    
    @property
    def nome(self):
        return self.__nome
    
    @nome.setter
    def nome (self,novo_nome):
        self.__nome = novo_nome.title()
    
    @property
    def likes(self):
        return self.__likes

    def dar_likes(self):
        self.__likes += 1


class Filme(Programa):
    def __init__(self, nome, ano, duracao):
        self.__nome = nome.title()
        self.ano = ano
        self.duracao = duracao
        self.__likes = 0

class Serie(Programa):
    def __init__(self, nome, ano, temporadas):
        self.__nome = nome.title()
        self.ano = ano
        self.temporadas = temporadas
        self._likes = 0

class Playlist(list):
   def __init__(self, nome, programas):
        self.nome = nome
        self._programas = programas

@property 
def listagem(self):
    return self._programas

@property
def Listagem(self):
    return len(self._programas)




Vingadores  = Filme ('Vingadores Guerra infinita', 2018, 160)
atlanta = Serie('atlanta', 2018, 2)
Emep = Filme('Todo mundo em pânico', 1999, 100)
demolidor = Serie('Demolidor', 2016, 2)

vingadores.dar_likes()
atlanta.dar_likes()
atlanta.dar_likes()
tmep.dar_likes()
tmep.dar_likes()
tmep.dar_likes()
tmep.dar_likes()
demolidor.dar_likes()
demolidor.dar_likes()
demolidor.dar_likes()

filmes_e_series = [vingadores,atlanta,demolidor,tmep]
playlist_fim_de_semana = Playlist('fim de semana',filmes_e_series)

print (f'Tamanho da Playlist: {len(playlist_fim_de_semana)}')

for programa in playlist_fim_de_semana:
    print (programa)

print(f'Está ou não está? {demolidor in playlist_fim_de_semana}')