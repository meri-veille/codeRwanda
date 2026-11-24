
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        success {
            echo 'WebApp Pipeline completed successfully!'
        }

        failure {
            echo 'WebApp Pipeline failed!'
        }
    }
}
