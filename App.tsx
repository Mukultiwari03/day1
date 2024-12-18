import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const App = () => {
  return (
    
<ScrollView  
>




      <View style={{alignItems:'center'}}>
      <Text style={{color:'black',fontSize:30,fontWeight:600,marginTop:10}}>Mukul Tiwari</Text>
      </View>
{/* experiences */}
      <View style={{marginLeft:20}}>
      <View><Text style={{fontSize:20,fontWeight:500,marginTop:25,color:'black'}}>Experiences</Text></View>

{/* below is line */}
      <View style={{backgroundColor:'black',
      width:'95%',height:2}}></View>

      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>Frontend Developer</Text>

        <View style={{width:'90%'}}>
      <Text style={{marginTop:5,}}>• Developed a fully customized design using Tailwind CSS, ensuring a unique visual identity and user experience tailored to the brand</Text>
      <Text style={{marginTop:5,}}>• Implemented Bootstrap's responsive grid system for consistent layout across devices, ensuring optimal user experience on various screen sizes.
      </Text>
      <Text style={{marginTop:5,}}>• Leveraged JavaScript to add interactive features, enhancing user engagement and interactivity on the website.</Text>
        </View>
      </View>
{/* below is projects */}
      <View style={{marginLeft:20}}>
      <View><Text style={{fontSize:20,fontWeight:500,marginTop:25,color:'black'}}>PROJECTS
      </Text></View>

{/* below is line */}
      <View style={{backgroundColor:'black',
      width:'95%',height:2}}></View>

      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>Florpy blorb</Text>

        <View style={{width:'90%'}}>
      <Text style={{marginTop:5, textDecorationLine:'underline'}}>
      https://github.com/Mukultiwari03?tab=repositories 
      • January 2024 - January 2024</Text>
      <Text style={{marginTop:5,}}>• Developed a captivating 2D game utilizing fundamental Unity principles, showcasing creativity and proficiency in game development techniques.
      </Text>
        </View>
      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>Chaloghumetravels
      </Text>

        <View style={{width:'90%'}}>
      <Text style={{marginTop:5, textDecorationLine:'underline'}}>
      https://chaloghumetravels.com/ 
      • November 2023 - December 2023</Text>
      <Text style={{marginTop:5,}}>• Developed a WordPress website with intuitive customization tools, precisely tailored to meet the unique requirements and preferences of the client,
      ensuring seamless navigation and engagement.
      </Text>
        </View>
      </View>
{/* education */}
      <View style={{marginLeft:20}}>
      <View><Text style={{fontSize:20,fontWeight:500,marginTop:25,color:'black'}}>EDUCATION</Text></View>

{/* below is line */}
      <View style={{backgroundColor:'black',
      width:'95%',height:2}}></View>

      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>Bachelor of Computer Application</Text>

        <View style={{width:'90%'}}>
      <Text style={{marginTop:5,}}>Swami Vivekanand Institute of Engineering and Technology • Punjab • 2025 • 3.94</Text>
        </View>

      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>Intermediate Studies</Text>

        <View style={{width:'90%'}}>
      <Text style={{marginTop:5,}}>Kendriya Vidyalaya High Ground A.F.S Chandigarh • Chandigarh, Punjab • 2022</Text>
        </View>
      </View>
{/* certification */}
      <View style={{marginLeft:20}}>
      <View><Text style={{fontSize:20,fontWeight:500,marginTop:25,color:'black'}}>CERTIFICATIONS</Text></View>

{/* below is line */}
      <View style={{backgroundColor:'black',
      width:'95%',height:2}}></View>

      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>MySQL</Text>

        <View style={{width:'90%'}}>
      <Text style={{marginTop:5,}}>Certified in MySQL from HackerRank, demonstrating proficiency in database management and querying, aligning with industry demands for datadriven solutions and optimization.
      </Text>
        </View>

      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>Frontend Development</Text>

        <View style={{width:'90%'}}>
      <Text style={{marginTop:5,}}>Certified in frontend development at The Uniques, validating expertise in cutting-edge technologies and methodologies for industry-relevant
      applications</Text>
        </View>
      </View>
{/* involvement */}
      <View style={{marginLeft:20}}>
      <View><Text style={{fontSize:20,fontWeight:500,marginTop:25,color:'black'}}>INVOLVEMENT</Text></View>

{/* below is line */}
      <View style={{backgroundColor:'black',
      width:'95%',height:2}}></View>

      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>Educator</Text>

        <View style={{width:'90%'}}>
      <Text style={{marginTop:5,}}>We facilitated immersive workshops on Frontend Development at multiple schools, empowering students with hands-on experience in HTML, CSS,
      and JavaScript, thereby fostering their proficiency in web development.
      </Text>
        </View>

      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>Interview Coordinator
      </Text>

        <View style={{width:'90%'}}>
      <Text style={{marginTop:5,}}>As Interview Coordinator at ISB, I streamlined interview procedures, fostering clear communication among candidates and interviewers, and played a
      pivotal role in candidate evaluations, enhancing the selection process</Text>
        </View>
      </View>
{/* skills */}
      <View style={{marginLeft:20}}>
      <View><Text style={{fontSize:20,fontWeight:500,marginTop:25,color:'black'}}>SKILLS</Text></View>

{/* below is line */}
      <View style={{backgroundColor:'black',
      width:'95%',height:2}}></View>

      <Text style={{marginTop:10,fontSize:16,fontWeight:'600'}}>Web Development: HTML, CSS, JavaScript, Bootstrap, Tailwind-CSS, Wordpress, MySQL. 
3D Modeling: Blender
Tools & Platform: Github, Canva, Adobe Photoshop</Text>
      </View>
      </ScrollView>
    
  )
}

export default App