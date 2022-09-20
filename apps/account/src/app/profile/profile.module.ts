import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './model/profile.model';
import { ProfileCommand } from './profile.command';
import { ProfileQueries } from './profile.queries';
import { ProfileRepository } from './repository/profile.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        schema: ProfileSchema,
        name: Profile.name,
      },
    ]),
  ],
  controllers: [],
  providers: [ProfileRepository, ProfileCommand, ProfileQueries],
  exports: [ProfileRepository],
})
export class ProfileModule {}
