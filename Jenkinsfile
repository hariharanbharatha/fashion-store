pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/hariharanbharatha/fashion-store.git'
      }
    }
    stage('Build Image') {
      steps {
        sh 'docker build -t fashion-store .'
      }
    }
    stage('Run Container') {
      steps {
        sh 'docker compose up -d'
      }
    }
  }
}

