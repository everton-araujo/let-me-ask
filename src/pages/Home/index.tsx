import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';

import { Button } from '../../components/Button';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import {
  Container,
  Aside,
  AsideImg,
  AsideStrongText,
  AsideText,
  Main,
  MainContent,
  MainImg,
  Separator,
  Form,
  FormInput,
  CreateRoomButton,
  CreateRoomImg,
} from '../../styles/auth';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed');
      return;
    }

    history.push(`rooms/${roomCode}`);
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

          <CreateRoomButton onClick={handleCreateRoom}>
            <CreateRoomImg src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </CreateRoomButton>

          <Separator>ou entre em uma sala</Separator>

          <Form onSubmit={handleJoinRoom}>
            <FormInput
              type="text" 
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">
              Entrar na sala
            </Button>
          </Form>
        </MainContent>
      </Main>
    </Container>
  );
}
