pipeline{
  agent any
  tools {nodejs "nodejs"}
  stages{
    stage('Checkout'){
      steps{
        git url: "https://github.com/rranjan306/react.git", branch: 'master'
      }
    }
    
    stage('Install dependencies'){
      steps{
        sh 'npm install'
      }
    }
      
    stage('Test'){
      steps{
        sh 'npm run test'
      }
    }
  }
}
