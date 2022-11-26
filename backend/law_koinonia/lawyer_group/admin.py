from django.contrib import admin
from lawyer_group.models import (LawyerGroup, LawyerGroupMember,
                                 LawyerGroupPost, LawyerGroupPostLike,
                                 LawyerGroupPostOpinion)


class GroupMemberAdmin(admin.TabularInline):
    model = LawyerGroupMember

class GroupAdmin(admin.ModelAdmin):
    inlines = [GroupMemberAdmin]
    list_display = ['__str__', 'group_admin']
    search_fields = ['group_member']
    class Meta:
        model = LawyerGroup


class GroupLikeAdmin(admin.TabularInline):
    model = LawyerGroupPostLike

class GroupOpinionAdmin(admin.TabularInline):
    model = LawyerGroupPostOpinion

class GroupPostAdmin(admin.ModelAdmin):
    inlines = [GroupLikeAdmin, GroupOpinionAdmin]
    list_display = ['__str__', 'author', 'id']
    search_fields = ['caption', 'author__group_admin__username', 'author__group_admin__email']
    class Meta:
        model = LawyerGroupPost




admin.site.register(LawyerGroup, GroupAdmin)
admin.site.register(LawyerGroupPost, GroupPostAdmin)


