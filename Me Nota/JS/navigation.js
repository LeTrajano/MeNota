function navigateTo(section) {
    if (section === 'emitir') {
      location.href = 'Telas/emitir.html';
    } else if (section === 'consultar') {
      location.href = 'Telas/consultar.html';
    }
  }
  // Navegar para a tela anterior
function navigateBack() {
    // Redireciona para o menu inicial
    window.location.href = "../Telas/menu.html"; // Caminho para o menu
  }
  