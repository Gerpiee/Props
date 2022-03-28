import React from 'react'
import PropTypes from 'prop-types'
 function Navbar(props) {
  return (
    <div>
        <h4>{props.title}</h4>
    </div>
  )
  
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired // Bu kısımda Navbar componentimizin içerisine title yazılması gerektiğini söylüyoruz yazmadığımız zaman bu string ifadeyi hata alıyoruz.
}
Navbar.defaultProps = {
    title : "Default App"// üst kısımda belirttiğimiz string atamazsak hata alacağımız durumu bu kısımda düzeltip eğer atamazsak "Default App " yazmasını sağlıyoruz
}
export default Navbar;