
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

        stage('Deploy with Docker') {
            steps {
                echo 'Building Docker image...'

                bat '''
                    docker build -t coderwanda-webapp:1.0 .
                    if %ERRORLEVEL% NEQ 0 exit /b %ERRORLEVEL%

                    docker rm -f coderwanda-container 2>NUL

                    docker run -d --name coderwanda-container -p 3000:3000 coderwanda-webapp:1.0
                    if %ERRORLEVEL% NEQ 0 exit /b %ERRORLEVEL%
                '''

                echo 'Application deployed successfully using Docker!'
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
