import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';

const Questions = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'question 1',
      id: 1,
      urlToDashBoard: '/superset/dashboard/births/',
    },
    {
      question: 'question 2',
      id: 2,
      urlToDashBoard: '/superset/dashboard/births/',
    },
    {
      question: 'question 3',
      id: 3,
      urlToDashBoard: '/superset/dashboard/births/',
    },
  ]);

  const Header = styled.div`
    width: 100%;
    padding-left: 1em;
  `;

  const headerTitle = {
    fontWeight: '700',
    textAlign: 'left',
    fontSize: '18px',
    padding: '12px',
    display: 'inline-block',
    lineHeight: '36px',
    fontFamily: "'Inter', Helvetica, Arial",
    backgroundColor: 'white',
  };

  const MainCardDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  `;

  const Card = styled.div`
    overflow: hidden;
    padding: 0 0 2em;
    margin-right: 2em;
    margin-left: 2em;
    margin: 48px;
    width: 25em;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;

    span {
      font-size: 20px;
      color: #f1356d;
      margin-bottom: 8px;
    }
  `;

  const CardHeader = styled.header`
    padding-bottom: 3em;
  `;

  const CardHeading = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  `;
  const CardFieldset = styled.fieldset`
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    border: 0;

    & + & {
      margin-top: 24px;
    }

    &:nth-last-of-type(2) {
      margin-top: 32px;
    }

    &:last-of-type {
      text-align: center;
    }
  `;
  const CardButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13em;
    height: 2.5em;
    padding: 12px 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #e5195f;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
      transform: translate(0, -5px);
    }
  `;

  return (
    <div>
      <Header color="white" style={headerTitle}>
        Questions
      </Header>
      <MainCardDiv className="Question">
        {questions.map(q => (
          <Card key={q.id}>
            <CardHeader>
              <CardHeading>{q.question}</CardHeading>
            </CardHeader>
            <CardFieldset>
              <CardButton>
                <Link
                  to={q.urlToDashBoard}
                  style={{ color: '#FFF', textDecoration: 'none' }}
                >
                  See Dashboard
                </Link>
              </CardButton>
            </CardFieldset>
          </Card>
        ))}
      </MainCardDiv>
    </div>
  );
};

export default Questions;
