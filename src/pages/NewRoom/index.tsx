import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import {
  Container,
  Aside,
  AsideImg,
  AsideStrongText,
  AsideText,
  Main,
  MainContent,
  MainImg,
  MainText,
  FormInput,
  Form,
  MainExistentRoomText,
  MainExistentRoomLink
} from '../../styles/auth';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <Aside>
        <AsideImg src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <AsideStrongText>Crie salas de Q&amp;A ao-vivo</AsideStrongText>
        <AsideText>Tire as dúvidas de sua audiência em tempo real</AsideText>
      </Aside>

      <Main>
        <MainContent>
          <MainImg src={logoImg} alt="Letmeask" />
          <MainText>Criar uma nova sala</MainText>

          <Form onSubmit={handleCreateRoom}>
            <FormInput
              type="text"
              placeholder='Nome da sala'
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <Button type='submit'>
              Criar sala
            </Button>
          </Form>

          <MainExistentRoomText>
            Quer entrar em uma sala existente? <MainExistentRoomLink to='/'>clique aqui</MainExistentRoomLink>
          </MainExistentRoomText>
        </MainContent>
      </Main>
    </Container>
  );
}
