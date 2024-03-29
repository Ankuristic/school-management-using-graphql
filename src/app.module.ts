import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { StudentModule } from './student/student.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url:'mongodb://localhost/school',
      synchronize:true,
      useUnifiedTopology:true,
      entities:[
        Lesson,
      ]
    }),
  GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonModule,
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule















































































































































































































