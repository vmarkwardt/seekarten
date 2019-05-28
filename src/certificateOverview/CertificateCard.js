import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCertificateCard = styled.section`
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 5px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.1);
`
const Header = styled.div`
  background: #b6e1dd;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  padding: 5px;
`
const Content = styled.section`
  padding: 5px;
`

export default function CertificateCard({
  title,
  subject,
  date,
  comment,
  id,
  onDeleteCertificate,
  onEditCertificate,
  history,
}) {
  return (
    <StyledCertificateCard>
      <Header>
        <em>{subject}</em>
        <span>{date}</span>
        <span>{id}</span>
        <button onClick={() => onEditCertificate(id, history)}>
          bearbeiten
        </button>
        <button onClick={() => onDeleteCertificate(id)}>X</button>
      </Header>
      <Content>
        <h4>{title}</h4>
        <small>{comment}</small>
      </Content>
    </StyledCertificateCard>
  )
}

CertificateCard.propTypes = {
  title: PropTypes.string.isRequired,
  subject: PropTypes.string,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string,
}
