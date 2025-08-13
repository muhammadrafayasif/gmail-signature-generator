function Signature({ 
  name, 
  header, 
  phone, 
  email, 
  image,

  linkedin,
  github,
  whatsapp,
  instagram
}) {
  const cellStyle = {
    border: "none",
    padding: '3px 10px',
    whiteSpace: 'nowrap',
  };
  const linkStyle = {
    marginRight: "5px"
  }
  return (
      <>
        <p>Best Regards,</p>
        <table border="1" style={{ borderCollapse: "collapse", border: "none", backgroundColor: "#F5F5F5", borderRadius: "14px" }}>
          <tr style={{border: "none"}}>
            {
              image ? 
                (<td style={{...cellStyle, padding: "5px 10px"}} rowspan="5">
                  <img style={{ borderRadius: "10px" }} alt='profile_picture' width='80' src={image} />
                </td>) 
                : 
                (<td style={{...cellStyle, padding: "5px 10px"}} rowspan="5">
                  <img style={{ borderRadius: "10px" }} alt='profile_picture' width='80' src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" />
                </td>)
              }
            <td style={{...cellStyle, fontWeight: "bold" }} colspan="6">{name ? name : 'Muhammad Falan'}</td>
          </tr>
          {
            header && 
            (<tr style={{border: "none"}}>
              <td style={cellStyle} colspan="6"><i>{header}</i></td>
            </tr>)
          }
          {
            phone && 
            (<tr style={{border: "none"}}>
              <td style={cellStyle} colspan="6">📞<i> <a href={`tel:${phone.replace(/\s+/g, '')}`} style={{textDecoration: "none", color: "black"}}>{phone}</a></i></td>
            </tr>)
          }
          {
            email && 
            (<tr style={{border: "none"}}>
              <td style={cellStyle} colspan="6">📧<i> <a href={`mailto:${email}`} style={{color: "black"}}>{email}</a></i></td>
            </tr>)
          }
          <tr style={{border: "none"}}>
            <td style={{...cellStyle, margin: '10px'}}>
            
            {
              linkedin && 
              (<a style={linkStyle} href={linkedin}><img width="30" alt="LinkedIn" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" /></a>)
            }

            {
              github && 
              (<a style={linkStyle} href={github}><img width="26" alt="GitHub" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Font_Awesome_5_brands_github-square.svg/512px-Font_Awesome_5_brands_github-square.svg.png?20181017221158" /></a>)
            }

            {
              whatsapp && 
              (<a style={linkStyle} href={whatsapp}><img width="30" alt="WhatsApp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png" /></a>)
            }

            {
              instagram && 
              (<a style={linkStyle} href={instagram}><img width="30" alt="Instagram" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" /></a>)
            }
            </td>
          </tr>
        </table>
      </>
    )
}

export default Signature;
