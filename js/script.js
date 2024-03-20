$(document).ready(function () {
  $('#cpf').mask('999.999.999-99', { placeholder: '000.000.000-00' })

  $('#tel').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000' })

  $('#cep').mask('99999-000', {
    placeholder: '00000-000'
  })

  $('form').validate({
    rules: {
      cpf: { required: true },
      tel: { required: true },
      cep: { required: true },
      email: { required: true },
      endereco: { required: true }
    }
  })
})
