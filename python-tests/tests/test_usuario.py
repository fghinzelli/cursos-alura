import pytest
from src.leilao.excecoes import LanceInvalido
from src.leilao.dominio import Usuario, Lance, Leilao

@pytest.fixture
def usuario():
    return Usuario('Fulano', 100)

@pytest.fixture
def leilao():
    return Leilao('Celular')

def test_deve_subtrair_valor_da_carteira_do_usuario_quando_este_propor_um_lance(usuario, leilao):
    usuario.propoe_lance(leilao, 1.0)
    
    assert usuario.carteira == 99.0

def test_deve_permitir_propor_lance_quando_o_valor_eh_menor_que_o_valor_da_carteira(usuario, leilao):
    usuario = Usuario('Fulano', 100)
    leilao = Leilao('Celular')
    usuario.propoe_lance(leilao, 50.0)

    assert usuario.carteira == 50.0

def test_deve_permitir_propor_lance_quando_o_valor_eh_igual_ao_valor_da_carteira(usuario, leilao):
    usuario = Usuario('Fulano', 100)
    leilao = Leilao('Celular')
    usuario.propoe_lance(leilao, 100.0)

    assert usuario.carteira == 0.0

def test_nao_deve_permitir_propor_lance_maior_que_o_valor_da_carteira(usuario, leilao):
    
    with pytest.raises(LanceInvalido):
        usuario = Usuario('Fulano', 100)
        leilao = Leilao('Celular')
        usuario.propoe_lance(leilao, 150.0)