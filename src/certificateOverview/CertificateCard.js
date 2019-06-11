import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { backgroundColor, chartWorldColor } from '../commons/constants'
import { DeleteForever, Edit } from 'styled-icons/material/'
import { getFormatedDate } from '../utils'

const StyledCertificateCard = styled.section`
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 5px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.1);
`
const Header = styled.div`
  background: ${backgroundColor};
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  padding: 5px;
`
const Content = styled.section`
  padding: 5px;
`
const StyledIcon = styled.button`
  background: ${backgroundColor};
  border: 2px solid ${chartWorldColor};
  color: ${chartWorldColor};
  border-radius: 3px;
  margin: 2px;
`

export default function CertificateCard({
  title,
  subject,
  date,
  comment,
  _id,
  onDeleteCertificate,
  onEditCertificate,
  history,
}) {
  return (
    <StyledCertificateCard>
      <Header>
        <em>{subject}</em>
        <span>{getFormatedDate(date)}</span>
        <div>
          <StyledIcon onClick={() => onEditCertificate(_id, history)}>
            <Edit title={'bearbeiten'} size={22} />
          </StyledIcon>
          <StyledIcon onClick={() => onDeleteCertificate(_id)}>
            <DeleteForever title={'löschen'} size={22} />
          </StyledIcon>
        </div>
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
  _id: PropTypes.string.isRequired,
  onDeleteCertificate: PropTypes.func.isRequired,
  onEditCertificate: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}
